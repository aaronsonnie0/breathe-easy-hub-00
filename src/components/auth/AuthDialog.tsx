
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SignUpForm } from './SignUpForm';
import { LoginForm } from './LoginForm';

interface AuthDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ isOpen, onOpenChange }) => {
  const [activeTab, setActiveTab] = useState<string>('sign-up');

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] rounded-lg animate-fade-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            {activeTab === 'sign-up' ? 'Create an Account' : 'Welcome Back'}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="sign-up" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 w-full mb-6">
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Log In</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sign-up" className="mt-2 space-y-4 animate-fade-in">
            <SignUpForm onSuccess={() => onOpenChange(false)} />
          </TabsContent>
          
          <TabsContent value="login" className="mt-2 space-y-4 animate-fade-in">
            <LoginForm onSuccess={() => onOpenChange(false)} switchToSignUp={() => setActiveTab('sign-up')} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
