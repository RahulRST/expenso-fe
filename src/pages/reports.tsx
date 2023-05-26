import React, { useEffect, useState } from 'react';
import { fetchReports } from '../api'; 

const Reports: React.FC = () => {
  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {

    const fetchReportsData = async () => {
      const fetchedReports = await fetchReports();
      setReports(fetchedReports);
    };

    fetchReportsData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Reports and Analytics</h2>
        {reports.length > 0 ? (
          <div>
            {reports.map((report) => (
              <div key={report.id} className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-orange-500">{report.title}</h3>
                <p className="text-gray-300">{report.summary}</p>
                <p className="text-gray-400">{report.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">Loading reports...</p>
        )}
      </div>
    </div>
  );
};

export default Reports;
