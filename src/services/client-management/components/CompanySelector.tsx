'use client';
import React, { useState } from 'react';
import { Building2, Globe, Lightbulb } from 'lucide-react';
import RadioCardGroup, { RadioOption } from '@/components/ui/radio-card-group';

const companies: RadioOption[] = [
  {
    value: 'tech-innovate',
    label: 'TechInnovate Solutions',
    description: 'Enterprise Software Solutions',
    icon: <Lightbulb className="mb-2.5 h-5 w-5 text-muted-foreground" />,
    metadata: {
      employeeCount: 250,
      founded: 2018,
      location: 'San Francisco, CA',
    },
  },
  {
    value: 'global-edge',
    label: 'GlobalEdge Consulting',
    description: 'Business Strategy & Analytics',
    icon: <Globe className="mb-2.5 h-5 w-5 text-muted-foreground" />,
    metadata: {
      employeeCount: 500,
      founded: 2010,
      location: 'New York, NY',
    },
  },
  {
    value: 'innovate-digital',
    label: 'Innovate Digital',
    description: 'Digital Transformation Services',
    icon: <Building2 className="mb-2.5 h-5 w-5 text-muted-foreground" />,
    metadata: {
      employeeCount: 150,
      founded: 2020,
      location: 'Austin, TX',
    },
  },
];

const CompanySelector = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>(
    companies[0].value,
  );

  const handleCompanyChange = (value: string) => {
    setSelectedCompany(value);
    // Find the selected company's metadata
    const company = companies.find(c => c.value === value);
    console.log('Selected company details:', company?.metadata);

    // Fetch and set clients based on selected company
  };

  return (
    <div className="py-4">
      <RadioCardGroup
        options={companies}
        value={selectedCompany}
        onChange={handleCompanyChange}
        cardClassName="p-4"
      />
    </div>
  );
};

export default CompanySelector;
