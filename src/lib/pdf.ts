
import { jsPDF } from 'jspdf';

interface PDFData {
  score: number;
  maxScore: number;
  category: string;
  recommendation: string;
  answers: Array<{
    question: string;
    answer: string;
  }>;
}

export const generatePDF = (data: PDFData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let yPosition = 20;
  
  // Title
  doc.setFontSize(20);
  doc.text('Asthma Control Assessment Results', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 20;
  
  // Score and Category
  doc.setFontSize(14);
  doc.text(`Score: ${data.score} out of ${data.maxScore}`, margin, yPosition);
  yPosition += 10;
  doc.text(`Category: ${data.category}`, margin, yPosition);
  yPosition += 20;
  
  // Questions and Answers
  doc.setFontSize(14);
  doc.text('Your Assessment Responses:', margin, yPosition);
  yPosition += 10;
  
  doc.setFontSize(12);
  data.answers.forEach((qa, index) => {
    const questionLines = doc.splitTextToSize(
      `Q${index + 1}: ${qa.question}`,
      pageWidth - (margin * 2)
    );
    doc.text(questionLines, margin, yPosition);
    yPosition += (questionLines.length * 7);
    
    const answerLines = doc.splitTextToSize(
      `A: ${qa.answer}`,
      pageWidth - (margin * 2)
    );
    doc.text(answerLines, margin, yPosition);
    yPosition += (answerLines.length * 7) + 10;
    
    // Check if we need a new page
    if (yPosition > doc.internal.pageSize.getHeight() - 40) {
      doc.addPage();
      yPosition = 20;
    }
  });
  
  // Recommendation
  doc.setFontSize(14);
  doc.text('Recommendation:', margin, yPosition);
  yPosition += 10;
  
  doc.setFontSize(12);
  const recommendationLines = doc.splitTextToSize(data.recommendation, pageWidth - (margin * 2));
  doc.text(recommendationLines, margin, yPosition);
  yPosition += (recommendationLines.length * 7) + 20;
  
  // Check if we need a new page for contact info
  if (yPosition > doc.internal.pageSize.getHeight() - 80) {
    doc.addPage();
    yPosition = 20;
  }
  
  // Contact Information
  doc.setFontSize(14);
  doc.text('Doctor Contact Information:', margin, yPosition);
  yPosition += 10;
  
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
  ], margin, yPosition);
  
  yPosition += 60;
  
  // Disclaimer
  doc.setFontSize(10);
  const disclaimer = 'This assessment is for informational purposes only and is not a substitute for professional medical advice.';
  const disclaimerLines = doc.splitTextToSize(disclaimer, pageWidth - (margin * 2));
  doc.text(disclaimerLines, margin, yPosition);
  
  // Date
  yPosition += (disclaimerLines.length * 7) + 10;
  doc.text(`Assessment Date: ${new Date().toLocaleDateString()}`, margin, yPosition);
  
  // Save the PDF
  doc.save('Asthma_Assessment_Report.pdf');
};
