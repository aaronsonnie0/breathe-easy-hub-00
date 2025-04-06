
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText } from 'lucide-react';

const DiarySection = () => {
  return (
    <section id="diary" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary-light text-primary-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
              Daily Tracking
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Your Personal Asthma Diary
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Keep track of your symptoms, medication usage, and peak flow readings to better understand and manage your asthma.
            </p>
            <p className="text-gray-600 mb-8">
              Our diary syncs with external tools like Google Sheets and Airtable, making it easy to share information with your healthcare provider.
            </p>
            <Button className="cta-button-primary">
              Start Tracking Today
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Log Your Symptoms</h3>
            
            <form className="space-y-4">
              <div>
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-input" 
                  placeholder="Your name" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label" htmlFor="date">
                    <Calendar className="inline-block w-4 h-4 mr-1" />
                    Date
                  </label>
                  <input 
                    type="date" 
                    id="date" 
                    className="form-input" 
                  />
                </div>
                
                <div>
                  <label className="form-label" htmlFor="time">
                    <Clock className="inline-block w-4 h-4 mr-1" />
                    Time
                  </label>
                  <input 
                    type="time" 
                    id="time" 
                    className="form-input" 
                  />
                </div>
              </div>
              
              <div>
                <label className="form-label" htmlFor="symptoms">
                  Symptoms
                </label>
                <select id="symptoms" className="form-input">
                  <option value="">Select symptom severity</option>
                  <option value="none">None - Feeling good</option>
                  <option value="mild">Mild - Noticeable but not limiting</option>
                  <option value="moderate">Moderate - Affecting activities</option>
                  <option value="severe">Severe - Significantly limiting</option>
                </select>
              </div>
              
              <div>
                <label className="form-label" htmlFor="peakflow">
                  Peak Flow Reading
                </label>
                <input 
                  type="number" 
                  id="peakflow" 
                  className="form-input" 
                  placeholder="L/min" 
                />
              </div>
              
              <div>
                <label className="form-label" htmlFor="notes">
                  Notes
                </label>
                <textarea 
                  id="notes" 
                  rows={3} 
                  className="form-input" 
                  placeholder="Additional observations..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit"
                  className="w-full cta-button-primary"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Log Entry
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-500 mt-4">
                Data will sync with your connected services
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiarySection;
