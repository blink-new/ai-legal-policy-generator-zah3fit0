import React from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const PolicyForm: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Generate Legal Policy</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="businessName" className="text-gray-700">Business Name</Label>
          <Input id="businessName" placeholder="Your Business Name" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="policyType" className="text-gray-700">Policy Type</Label>
          <Select>
            <SelectTrigger id="policyType" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
              <SelectValue placeholder="Select policy type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="privacy-policy">Privacy Policy</SelectItem>
              <SelectItem value="terms-of-service">Terms of Service</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-2 mt-6">
        <Label htmlFor="businessDescription" className="text-gray-700">Business Description</Label>
        <Textarea id="businessDescription" placeholder="Describe your business and its activities..." rows={6} className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
      </div>
      <div className="mt-8 text-center">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md">Generate Policy</Button>
      </div>
    </div>
  );
};

export default PolicyForm;
