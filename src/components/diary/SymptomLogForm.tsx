
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { addSymptomLog } from "@/lib/diary";
import { SymptomLog } from "@/types/diary";

const formSchema = z.object({
  date: z.date({
    required_error: "Please select a date",
  }),
  nighttimeAwakenings: z.coerce.number().min(0).max(10),
  inhalerUse: z.coerce.number().min(0),
  stressLevel: z.coerce.number().min(1).max(10),
  triggers: z.string(),
  hoursOfSleep: z.coerce.number().min(0).max(24),
  activityImpact: z.coerce.number().min(1).max(10),
  peakFlow: z.coerce.number().min(0),
});

export default function SymptomLogForm({ onSuccess }: { onSuccess?: () => void }) {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      nighttimeAwakenings: 0,
      inhalerUse: 0,
      stressLevel: 1,
      triggers: '',
      hoursOfSleep: 8,
      activityImpact: 1,
      peakFlow: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Explicitly create a properly typed object with all required fields
      const symptomData: Omit<SymptomLog, 'id' | 'createdAt'> = {
        date: values.date,
        nighttimeAwakenings: values.nighttimeAwakenings,
        inhalerUse: values.inhalerUse,
        stressLevel: values.stressLevel,
        triggers: values.triggers.split(',').map(t => t.trim()).filter(Boolean),
        hoursOfSleep: values.hoursOfSleep,
        activityImpact: values.activityImpact,
        peakFlow: values.peakFlow,
      };
      
      await addSymptomLog(symptomData);
      
      toast({
        title: "Success!",
        description: "Your symptoms have been logged successfully.",
      });
      
      form.reset();
      
      // Call the onSuccess callback if provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to log symptoms. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <Calendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date()
                    }
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="nighttimeAwakenings"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nighttime Awakenings</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="inhalerUse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Inhaler Use (times)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stressLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stress Level (1-10)</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={10} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="triggers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Triggers (comma-separated)</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="dust, pollen, etc." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hoursOfSleep"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hours of Sleep</FormLabel>
                <FormControl>
                  <Input type="number" min={0} max={24} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="activityImpact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activity Impact (1-10)</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={10} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="peakFlow"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peak Flow (L/min)</FormLabel>
                <FormControl>
                  <Input type="number" min={0} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">Log Symptoms</Button>
      </form>
    </Form>
  );
}
