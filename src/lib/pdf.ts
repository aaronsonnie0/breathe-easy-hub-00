
import { jsPDF } from 'jspdf';

interface PDFData {
  score: number;
  maxScore: number;
  category: string;
  recommendation: string;
}

export const generatePDF = (data: PDFData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Title
  doc.setFontSize(20);
  doc.text('Asthma Control Assessment Results', pageWidth / 2, 20, { align: 'center' });
  
  // Score and Category
  doc.setFontSize(14);
  doc.text(`Score: ${data.score} out of ${data.maxScore}`, 20, 40);
  doc.text(`Category: ${data.category}`, 20, 50);
  
  // Recommendation
  doc.setFontSize(12);
  const recommendationLines = doc.splitTextToSize(data.recommendation, pageWidth - 40);
  doc.text(recommendationLines, 20, 70);
  
  // Contact Information
  doc.setFontSize(14);
  doc.text('Doctor Contact Information:', 20, 100);
  doc.setFontSize(12);
  doc.text([
    'Contact Numbers:',
    '+91 422 350 0000',
    '+91 422 450 0000',
    '+91 7970 108 108',
    '',
    'Address:',
    '395, Sarojini Naidu Rd,',
    'New Siddhapudur, Coimbatore,',
    'Tamil Nadu 641044'
  ], 20, 120);
  
  // Disclaimer
  doc.setFontSize(10);
  const disclaimer = 'This assessment is a tool to help monitor your asthma control. It does not replace professional medical advice. Please consult with your healthcare provider for medical decisions.';
  const disclaimerLines = doc.splitTextToSize(disclaimer, pageWidth - 40);
  doc.text(disclaimerLines, 20, 180);
  
  // Date
  doc.text(`Assessment Date: ${new Date().toLocaleDateString()}`, 20, 200);
  
  // Save the PDF
  doc.save('asthma-assessment-results.pdf');
};
