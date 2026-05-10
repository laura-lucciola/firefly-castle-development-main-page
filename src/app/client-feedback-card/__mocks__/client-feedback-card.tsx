// Mock for client-feedback-card component to avoid require.context issues in tests
import React from 'react';

const ClientFeedbackCard: React.FC<{clientName: string}> = ({clientName}) => {
  return <div data-testid="client-feedback-card-mock">ClientFeedbackCard - {clientName}</div>;
};

export default ClientFeedbackCard;
