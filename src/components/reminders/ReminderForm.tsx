
import React from 'react';
import { useForm } from 'react-hook-form';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface ReminderFormData {
  description: string;
  date: string;
  time: string;
}

interface ReminderFormProps {
  onSubmit: (data: ReminderFormData) => void;
}

const ReminderForm = ({ onSubmit }: ReminderFormProps) => {
  const form = useForm<ReminderFormData>({
    defaultValues: {
      description: '',
      date: '',
      time: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reminder Description</FormLabel>
              <FormControl>
                <Input placeholder="Take medication..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          <Calendar className="mr-2 h-4 w-4" />
          Set Reminder
        </Button>
      </form>
    </Form>
  );
};

export default ReminderForm;

