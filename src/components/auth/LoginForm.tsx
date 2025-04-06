
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { toast } from 'sonner';

// Form validation schema
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

type FormValues = z.infer<typeof formSchema>;

interface LoginFormProps {
  onSuccess: () => void;
  switchToSignUp: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSuccess, switchToSignUp }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetInProgress, setResetInProgress] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    
    try {
      // Sign in with Firebase Authentication
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success('Logged in successfully!');
      onSuccess();
    } catch (error: any) {
      console.error('Error during login:', error);
      
      // Handle specific Firebase errors
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
        toast.error('Invalid email or password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        toast.error('No account found with this email.');
      } else if (error.code === 'auth/too-many-requests') {
        toast.error('Too many failed login attempts. Please try again later or reset your password.');
      } else {
        toast.error('Failed to log in. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = form.getValues('email');
    
    if (!email || !z.string().email().safeParse(email).success) {
      toast.error('Please enter a valid email address first.');
      return;
    }
    
    setResetInProgress(true);
    
    try {
      await sendPasswordResetEmail(auth, email);
      setResetEmailSent(true);
      toast.success('Password reset email sent!');
    } catch (error: any) {
      console.error('Error sending password reset:', error);
      
      if (error.code === 'auth/user-not-found') {
        toast.error('No account found with this email.');
      } else {
        toast.error('Failed to send password reset email. Please try again.');
      }
    } finally {
      setResetInProgress(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="example@mail.com" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex justify-between items-center mt-2">
          <Button 
            type="button" 
            variant="link" 
            className="p-0 h-auto text-sm" 
            onClick={handleForgotPassword}
            disabled={resetInProgress}
          >
            {resetInProgress ? 'Sending...' : 'Forgot Password?'}
          </Button>
          
          <Button 
            type="button" 
            variant="link" 
            className="p-0 h-auto text-sm" 
            onClick={switchToSignUp}
          >
            Need an account?
          </Button>
        </div>
        
        {resetEmailSent && (
          <p className="text-sm text-green-600 mt-2">
            Password reset email sent. Please check your inbox.
          </p>
        )}
        
        <Button 
          type="submit" 
          className="w-full mt-6" 
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Log In'}
        </Button>
      </form>
    </Form>
  );
};
