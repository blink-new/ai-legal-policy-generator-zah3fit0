import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface PolicyFormProps {
  onPolicyGenerated: (content: string, title: string) => void;
}

const PolicyForm: React.FC<PolicyFormProps> = ({ onPolicyGenerated }) => {
  const [businessName, setBusinessName] = useState('');
  const [policyType, setPolicyType] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const validateForm = () => {
    if (!businessName.trim()) {
      setError('Please enter your business name.');
      return false;
    }
    if (!policyType) {
      setError('Please select a policy type.');
      return false;
    }
    if (!businessDescription.trim()) {
      setError('Please describe your business.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleGeneratePolicy = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call for now
      // In a real implementation, this would call a backend/Supabase function
      setTimeout(() => {
        const policies = {
          'privacy-policy': `Privacy Policy for ${businessName}

This Privacy Policy explains how ${businessName} collects, uses, and protects your personal information. We are committed to ensuring that your privacy is protected.

INFORMATION WE COLLECT
We may collect the following information: names, contact information, demographic information, and other information relevant to customer surveys and offers.

HOW WE USE YOUR INFORMATION
We require this information to understand your needs and provide you with a better service, particularly for:
- Internal record keeping
- Improving our products and services
- Sending promotional emails about new products or special offers
- Market research purposes

SECURITY
We are committed to ensuring that your information is secure. We have implemented suitable physical, electronic, and managerial procedures to prevent unauthorized access or disclosure.

COOKIES
Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies.

THIRD-PARTY DISCLOSURE
We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent.

YOUR RIGHTS
You have the right to request details of personal information we hold about you. If you would like a copy, please email us.

UPDATES TO THIS POLICY
We may update this policy periodically. Please check this page regularly to ensure you are familiar with any changes.

CONTACT
If you have any questions regarding this privacy policy, you may contact us at: [Your Contact Information]

Last updated: ${new Date().toLocaleDateString()}`,
          'terms-of-service': `Terms of Service for ${businessName}

OVERVIEW
This website is operated by ${businessName}. Throughout the site, the terms "we", "us" and "our" refer to ${businessName}. By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to the following terms and conditions.

SECTION 1 - GENERAL CONDITIONS
We reserve the right to refuse service to anyone for any reason at any time.
You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service without express written permission by us.

SECTION 2 - ACCURACY OF INFORMATION
We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only.

SECTION 3 - MODIFICATIONS TO THE SERVICE
We reserve the right to modify or discontinue the Service (or any part or content thereof) without notice at any time.
We shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.

SECTION 4 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
If you send creative ideas, suggestions, or materials ("submissions"), you agree that we may, at any time, without restriction, edit, copy, publish, and use any submissions.

SECTION 5 - ERRORS, INACCURACIES AND OMISSIONS
Occasionally there may be information on our site that contains typographical errors, inaccuracies or omissions. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information if any information on the Service is inaccurate at any time without prior notice.

SECTION 6 - GOVERNING LAW
These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of [Your Country/State].

SECTION 7 - CHANGES TO TERMS OF SERVICE
You can review the most current version of the Terms of Service at any time on this page.
We reserve the right to update, change or replace any part of these Terms of Service by posting updates or changes to our website.

SECTION 8 - CONTACT INFORMATION
Questions about the Terms of Service should be sent to us at: [Your Contact Information]

Last updated: ${new Date().toLocaleDateString()}`
        };
        
        const policyTitle = policyType === 'privacy-policy' ? 'Privacy Policy' : 'Terms of Service';
        onPolicyGenerated(policies[policyType], policyTitle);
        setIsLoading(false);
      }, 2000);
    } catch (err) {
      setError('Failed to generate policy. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl bg-white shadow-md rounded-lg card-shadow animate-in">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Generate Legal Policy</h1>
      
      {error && (
        <Alert variant="destructive" className="mb-6 animate-in">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="businessName" className="text-gray-700 font-medium">Business Name</Label>
          <Input
            id="businessName"
            placeholder="Your Business Name"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="policyType" className="text-gray-700 font-medium">Policy Type</Label>
          <Select 
            onValueChange={setPolicyType} 
            disabled={isLoading}
          >
            <SelectTrigger id="policyType" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
              <SelectValue placeholder="Select policy type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="privacy-policy">Privacy Policy</SelectItem>
              <SelectItem value="terms-of-service">Terms of Service</SelectItem>
              <SelectItem value="cookie-policy">Cookie Policy</SelectItem>
              <SelectItem value="disclaimer">Disclaimer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2 mt-6">
        <Label htmlFor="businessDescription" className="text-gray-700 font-medium">Business Description</Label>
        <Textarea
          id="businessDescription"
          placeholder="Describe your business, its services, and how it collects/processes customer data..."
          rows={6}
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          value={businessDescription}
          onChange={(e) => setBusinessDescription(e.target.value)}
          disabled={isLoading}
        />
        <p className="text-gray-500 text-sm mt-1">
          Provide as much detail as possible for a more accurate policy.
        </p>
      </div>
      <div className="mt-8 text-center">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-all w-full sm:w-auto"
          onClick={handleGeneratePolicy}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Policy'
          )}
        </Button>
      </div>
    </div>
  );
};

export default PolicyForm;
