'use client'

import { ResumeContainer } from "./components/ResumeContainer/ResumeContainer";
import styles from './page.module.scss'
import { Container } from "./components/Container/Container";
import { FormContainer } from "./components/FormContainer/FormContainer";
export default function Home() {



  const mockData = {
    idFatura: 5144794,
    value: 158.23,
    discount: 0.25,
    resume: 129.74

}



  return (
    <div>
      <main className={styles.main}>
        <Container classname="step1">
        <h2 style={{gridArea: "title"}}>Micro</h2>
        <FormContainer gridarea="form" />
        <ResumeContainer listItems={mockData} gridarea="resume"/>
        </Container>
      </main>
    </div>
  );
}
