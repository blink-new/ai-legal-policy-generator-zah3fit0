import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Clipboard, Download, Check } from 'lucide-react';
import { useToast } from "../hooks/use-toast";

interface PolicyOutputProps {
  content: string;
  title: string;
  visible: boolean;
}

const PolicyOutput: React.FC<PolicyOutputProps> = ({ content, title, visible }) => {
  const { toast } = useToast();
  
  if (!visible) return null;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied to clipboard",
      description: `${title} has been copied to your clipboard.`,
      duration: 3000,
    });
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Download started",
      description: `${title} will be downloaded to your device.`,
      duration: 3000,
    });
  };

  return (
    <Card className="mt-8 border border-gray-200 shadow-lg card-shadow animate-in">
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <CardTitle className="text-xl font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 max-h-96 overflow-y-auto">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </CardContent>
      <CardFooter className="flex justify-end gap-4 bg-gray-50 border-t border-gray-200 p-4">
        <Button 
          variant="outline" 
          className="flex items-center gap-2" 
          onClick={handleCopyToClipboard}
        >
          <Clipboard size={16} />
          Copy
        </Button>
        <Button 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700" 
          onClick={handleDownload}
        >
          <Download size={16} />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PolicyOutput;
