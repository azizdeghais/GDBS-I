import styled from 'styled-components'
import { useState } from 'react';

interface Participant {
  id: number;
  f_name: string;
  l_name: string;
  email: string;
  country_of_origin: string;
  date_of_birth: string;
}

interface HU_Staff {
  id: number;
  staff_id: number;
  approval: boolean;
  f_name: string;
  l_name: string;
}

interface UnpaidCourses {
  course_title: string;
  f_name: string;
  l_name: string;
  payment_amount: number | null; // null means unpaid
}

export interface TestAttempt {
  test_id: number;
  participant_id: number;
  attempt_number: number;
  score: number;
  passed: boolean;
  test_title: string;
  f_name: string;
  l_name: string;
}

export interface CourseEnrollment {
  course_ID: number;
  course_title: string;
  enrollments: number;
}

export interface Course {
  id: number;
  title: string;
  level: string | null;
  language: string;
  format: string | null;
}

export interface Payment {
  id: number;
  participant_ID: number;
  amount: number;
  method: string;
  date: string;
  status: string;
}

export interface Ticket {
  id: number;
  title: string;
  description: string | null;
  status: string;
  category: string | null;
  created_at: string;  // ISO timestamp
  closed_at: string | null;
}

export interface HybridCourse {
  id: number;
  title: string;
  level: string | null;
  language: string;
  format: string; // should always be 'Hybrid'
}

export interface Instructor {
  id: number;
  f_name: string;
  l_name: string;
  email: string;
}

function App() {

  const [participant, setParticipant] = useState<Participant | null>(null);
  const [huStaff, setHuStaff] = useState<HU_Staff | null>(null);
  const [unpaidCourses, setUnpaidCourses] = useState<UnpaidCourses[]>([]);
  const [courses, setCourses] = useState<CourseEnrollment[]>([]);
  const [englishCourses, setEnglishCourses] = useState<Course[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [hybridCourses, setHybridCourses] = useState<HybridCourse[]>([]);
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [attempts, setAttempts] = useState<TestAttempt[]>([]);
  const [, setLoading] = useState(false);

  const fetchEnrollments = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/course/enrollments");
      const data: CourseEnrollment[] = await res.json();
      console.log(data);
      setCourses(data);
    } catch (err) {
      console.error("Error fetching course enrollments:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchParticipant = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/participant"); // your Express API
      const data = await res.json();
      console.log(data);
      setParticipant(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchHUStaff = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/hu_staff"); // your Express API
      const data = await res.json();
      console.log(data);
      setHuStaff(data[0]);
    } catch (err) {
      console.error("Error fetching students:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUnpaidCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/courses/unpaid");
      const data: UnpaidCourses[] = await res.json();
      console.log(data);
      setUnpaidCourses(data);
    } catch (err) {
      console.error("Error fetching unpaid courses:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchEnglishCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/courses/english"); // your Express endpoint
      const data: Course[] = await res.json();
      console.log(data);
      setEnglishCourses(data);
    } catch (err) {
      console.error("Error fetching English courses:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPendingPayments = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/payments/pending"); // your Express endpoint
      const data: Payment[] = await res.json();
      console.log(data);
      setPayments(data);
    } catch (err) {
      console.error("Error fetching pending payments:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/tickets/open");
      const data: Ticket[] = await res.json();
      console.log(data);
      setTickets(data);
    } catch (err) {
      console.error("Error fetching tickets:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchHybridCourses = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/courses/hybrid");
      const data: HybridCourse[] = await res.json();
      console.log(data);
      setHybridCourses(data);
    } catch (err) {
      console.error("Error fetching hybrid courses:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchInstructors = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/instructors/german-c1");
      const data: Instructor[] = await res.json();
      console.log(data);
      setInstructors(data);
    } catch (err) {
      console.error("Error fetching instructors:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPassedAttempts = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/test-attempts/passed");
      const data: TestAttempt[] = await res.json();
      console.log(data);
      setAttempts(data);
    } catch (err) {
      console.error("Error fetching test attempts:", err);
    } finally {
      setLoading(false);
    }
  };

  const Title = styled.h3`
  display: block;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 24px;
  `;
  const RequestButton = styled.button`
  flex:1 0 20%;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 3px;
  width: 150px;
  height: 50px;
  border:none;
  letter-spacing: 2px;
  font-family: sans-serif;
  `;
  const SQLAnfragen = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-items: center;
  `;

  return (
    <div>
      <Title>Grundlagen von Datenbanksystem Projekt - 2025</Title>
      <Title>Dashboard</Title>
      <SQLAnfragen>
        <RequestButton onClick={fetchParticipant} >Fetch A Participant</RequestButton>
        <RequestButton onClick={fetchHUStaff}>Fetch all HU Staff without an approval"</RequestButton>
        <RequestButton onClick={fetchUnpaidCourses}>Fetch Unpaid Courses</RequestButton>
        <RequestButton onClick={fetchEnrollments}>Fetch Course Enrollments</RequestButton>
        <RequestButton onClick={fetchEnglishCourses}>Fetch English Courses</RequestButton>
        <RequestButton onClick={fetchPendingPayments}>Fetch Payment with "Pending" status</RequestButton>
        <RequestButton onClick={fetchTickets}>Fetch Active Tickets</RequestButton>
        <RequestButton onClick={fetchHybridCourses}>Fetch Hybrid Courses</RequestButton>
        <RequestButton onClick={fetchInstructors}>Fetch German C-1 Instructors</RequestButton>
        <RequestButton onClick={fetchPassedAttempts}>Fetch Participants that achieved max points</RequestButton>
      </SQLAnfragen>
      <div>
        {participant ? (
          <div>
            <p>ID: {participant.id}</p>
            <p>First Name: {participant.f_name}</p>
            <p>Last Name: {participant.l_name}</p>
          </div>
        ) : null}
        {huStaff ? (
          <div>
            <p>ID: {huStaff.staff_id}</p>
            <p>First Name: {huStaff.f_name}</p>
            <p>Last Name: {huStaff.l_name}</p>
            <p>Approval?: {huStaff.approval ? "Yes" : "No"}</p>
          </div>
        ) : null}
        {unpaidCourses?.length > 0 ? (
          unpaidCourses.map((course, index) => (
            <div key={index}>
              <p>Course: {course.course_title}</p>
              <p>Participant: {course.f_name} {course.l_name}</p>
              <p>Payment: {course.payment_amount ?? "Unpaid"}</p>
            </div>
          ))
        ) : null}
        {courses.map((course) => (
          <div key={course.course_ID} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <p>Course: {course.course_title}</p>
            <p>Enrollments: {course.enrollments}</p>
          </div>
        ))}

        {englishCourses.map((course) => (
          <div key={course.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <p>Course: {course.title}</p>
            <p>Level: {course.level ?? "N/A"}</p>
            <p>Language: {course.language}</p>
            <p>Format: {course.format ?? "N/A"}</p>
          </div>
        ))}

        {Array.isArray(payments) && payments.length > 0 ? (
          payments.map((payment) => (
            <div key={payment.id}>
              <p>Participant ID: {payment.participant_ID}</p>
              <p>Amount: ${payment.amount.toFixed(2)}</p>
              <p>Method: {payment.method}</p>
              <p>Date: {new Date(payment.date).toLocaleDateString()}</p>
              <p>Status: {payment.status}</p>
            </div>
          ))
        ) : null}

        {tickets.map((ticket) => (
          <div key={ticket.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <p>Category: {ticket.category || "N/A"}</p>
            <p>Created At: {new Date(ticket.created_at).toLocaleString()}</p>
          </div>
        ))}

        {hybridCourses.map((course) => (
          <div key={course.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{course.title}</h3>
            <p>Level: {course.level || "N/A"}</p>
            <p>Language: {course.language}</p>
            <p>Format: {course.format}</p>
          </div>
        ))}

        {instructors.map((instructor) => (
          <div key={instructor.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>
              {instructor.f_name} {instructor.l_name}
            </h3>
            <p>Email: {instructor.email}</p>
          </div>
        ))}

        {attempts.map((attempt) => (
          <div key={`${attempt.test_id}-${attempt.participant_id}-${attempt.attempt_number}`} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{attempt.test_title}</h3>
            <p>
              Participant: {attempt.f_name} {attempt.l_name} (ID: {attempt.participant_id})
            </p>
            <p>Attempt #{attempt.attempt_number}</p>
            <p>Score: {attempt.score}</p>
            <p>Status: {attempt.passed ? "Passed ✅" : "Failed ❌"}</p>
          </div>
        ))}
      </div>
    </div >
  )
}

export default App
