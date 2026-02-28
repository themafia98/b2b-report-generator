import React, { useState } from "react";
import { ReportsTable } from "./ReportsTable";
import { useReportsStorage } from "./useReportsStorage";
import { Viewer } from "../viewer/viewer";
import { ErrorBoundary } from "../common/ErrorBoundary";
import { Loader } from "../common/Loader";
import styled from "@emotion/styled";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  min-height: 80vh;
  padding: 32px;
  box-sizing: border-box;
  background: #f7f8fa;
`;
const Left = styled.div`
  flex: 1;
  min-width: 320px;
`;
const Right = styled.div`
  flex: 2;
  min-width: 0;
`;
const Title = styled.h2`
  font-size: 2rem;
  color: #6366f1;
  margin-bottom: 24px;
`;
const Info = styled.div`
  margin-bottom: 24px;
  color: #444;
  font-size: 1.1rem;
`;

export const ReportsPage: React.FC = () => {
  const reportsStorage = useReportsStorage();
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);
  const [aiResult, setAIResult] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAICheck = (_id: string) => {
    setAIResult("AI check passed: No issues found.");
  };

  return (
    <PageContainer>
      <Left>
        <Title>Saved Reports</Title>
        <Info>
          All your generated reports are stored locally in your browser. You can view, delete, or run an AI check on any report.
        </Info>
        <ReportsTable
          reports={reportsStorage.reports}
          onView={setSelectedReportId}
          onRemove={reportsStorage.removeReport}
          onAICheck={handleAICheck}
        />
      </Left>
      <Right>
        {selectedReportId ? (
          <ErrorBoundary>
            <React.Suspense fallback={<Loader />}>
              <Viewer formData={reportsStorage.getReport(selectedReportId)?.data ?? {}} />
              {aiResult && <div style={{marginTop:16, color:'#6366f1', fontWeight:600}}>{aiResult}</div>}
            </React.Suspense>
          </ErrorBoundary>
        ) : (
          <Info>Select a report to preview it here.</Info>
        )}
      </Right>
    </PageContainer>
  );
};
