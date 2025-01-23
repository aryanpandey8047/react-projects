import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, TextField, Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const steps = ['Job Location', 'Job Position', 'Personal Details'];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    location: '',
    position: '',
    name: '',
    email: '',
    phone: '',
  });
  const [touchedFields, setTouchedFields] = useState({});

  const handleNext = () => {
    setTouchedFields({}); // Reset touched fields
    if (isStepValid()) {
      setActiveStep((prev) => prev + 1);
    } else {
      setTouchedFields({
        ...touchedFields,
        ...Object.keys(formData).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {}),
      });
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const isStepValid = () => {
    switch (activeStep) {
      case 0:
        return formData.location.trim() !== '';
      case 1:
        return formData.position.trim() !== '';
      case 2:
        return (
          formData.name.trim() !== '' &&
          formData.email.trim() !== '' &&
          formData.phone.trim() !== ''
        );
      default:
        return false;
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setTouchedFields({ ...touchedFields, [field]: true });
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
    <Stepper activeStep={activeStep} alternativeLabel>
  {steps.map((label, index) => (
    <Step key={label} completed={activeStep > index}>
      <StepLabel
        icon={
          activeStep > index ? (
            <CheckCircleIcon
              sx={{
                backgroundColor:'transparent',
                borderRadius:'50%',
                color: '#f2e16e', 
                width: '25px', 
                height: '25px',
              }}
            />
          ) : undefined
        }
        sx={{
          '& .MuiStepLabel-label': {
            color: index === activeStep ? 'black' : 'gray',
            fontWeight: index === activeStep ? 'bold' : 'normal',
          },
          '& .MuiStepIcon-root': {
            Color:index === activeStep ? 'purple' : index < activeStep ? 'yellow' : 'transparent',
          },
          '& .MuiStepIcon-text': {
            fill: 'black',
          },
        }}
      >
        {label}
      </StepLabel>
    </Step>
  ))}
</Stepper>

      {activeStep === steps.length ? (
        <Box sx={{ textAlign: 'center', padding: '20px' }}>
          <ThumbUpIcon sx={{ fontSize: '48px', color: 'purple', marginBottom: '10px' }} />
          <Typography variant="h4">We’ve received your application!</Typography>
          <Typography>We will process it and reach out to you soon.</Typography>
        </Box>
      ) : (
        <Box sx={{ padding: '20px' }}>
          {activeStep === 0 && (
            <TextField
              fullWidth
              label="Job Location"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              error={touchedFields.location && !formData.location.trim()}
              helperText={
                touchedFields.location && !formData.location.trim()
                  ? 'Location is required'
                  : ''
              }
            />
          )}

          {activeStep === 1 && (
            <TextField
              fullWidth
              label="Job Position"
              value={formData.position}
              onChange={(e) => handleChange('position', e.target.value)}
              error={touchedFields.position && !formData.position.trim()}
              helperText={
                touchedFields.position && !formData.position.trim()
                  ? 'Position is required'
                  : ''
              }
            />
          )}

          {activeStep === 2 && (
            <>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={touchedFields.name && !formData.name.trim()}
                helperText={
                  touchedFields.name && !formData.name.trim()
                    ? 'Name is required'
                    : ''
                }
              />
              <TextField
                fullWidth
                label="Email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                error={touchedFields.email && !formData.email.trim()}
                helperText={
                  touchedFields.email && !formData.email.trim()
                    ? 'Email is required'
                    : ''
                }
                style={{ marginTop: '10px' }}
              />
              <TextField
                fullWidth
                label="Phone"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                error={touchedFields.phone && !formData.phone.trim()}
                helperText={
                  touchedFields.phone && !formData.phone.trim()
                    ? 'Phone is required'
                    : ''
                }
                style={{ marginTop: '10px' }}
              />
              <Typography variant="h6" sx={{ marginTop: '20px' }}>Certification</Typography>
              <Box
                sx={{
                  marginTop: '10px',
                  padding: '20px',
                  border: '2px dashed purple',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: '#f9f9f9',
                }}
              >
                Drag and drop or click to upload
              </Box>
            </>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ backgroundColor: 'purple', color: 'white' }}
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MultiStepForm;
