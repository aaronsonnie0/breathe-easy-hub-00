
import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Clock } from 'lucide-react';

interface ReminderAlertProps {
  isOpen: boolean;
  onDismiss: () => void;
  reminder: {
    description: string;
    date: string;
    time: string;
  } | null;
}

const ReminderAlert = ({ isOpen, onDismiss, reminder }: ReminderAlertProps) => {
  if (!reminder) return null;

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Reminder Set
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-2">
            <p className="font-medium text-base text-foreground">{reminder.description}</p>
            <p className="text-sm text-muted-foreground">
              Scheduled for: {new Date(reminder.date).toLocaleDateString()} at {reminder.time}
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onDismiss}>Dismiss</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ReminderAlert;

