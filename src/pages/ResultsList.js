import React from 'react';
import { useQuery } from 'react-query';
import Table from '../components/Table';
import { getResults } from '../api/results';

const ResultsList = () => {
  const { data: results, isLoading, error } = useQuery('results', getResults);

  const tableColumns = [
    { columnKey: 'course_name', columnName: 'Course' },
    { columnKey: 'student_name', columnName: 'Student' },
    { columnKey: 'grade', columnName: 'Score' },
  ];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <div className="formbold-form-title">
          <h2>Current Results</h2>
          {results.length > 0 ? (
            <Table rows={results} columns={tableColumns} />
          ) : (
            <p>No Results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsList;
