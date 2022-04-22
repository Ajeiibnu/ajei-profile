import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My Daily <strong>Code</strong>
      </h1>
      <GitHubCalendar 
        username="ajeiibnu"
        blockSize={15}
        color="#1a1a1a"
        fontSize={16}
        blockMargin={12}
        transformData={selectLastHalfYear} 
        hideColorLegend
      />
    </Row> 
  )
}
