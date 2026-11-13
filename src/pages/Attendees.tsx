import { useState } from 'react';
import EventHeader from '../components/EventHeader';
import { AddStepCard, StepCard, StepCardBlock, StepCardGrid } from '../components/StepCard';
import personPortal from '../assets/icons/person-portal.svg';
import logicArrow from '../assets/icons/logic-arrow.svg';
import computer from '../assets/icons/computer.svg';

const placeholderDescription =
  'Description that explains the value goes here. Description that explains the value goes here.';

type Workflow = {
  id: number;
  title: string;
  description: string;
};

const initialWorkflows: Workflow[] = [1, 2, 3].map((id) => ({
  id,
  title: 'Attendee registration',
  description: 'Start by creating a general registration workflow',
}));

export default function Attendees() {
  const [workflows, setWorkflows] = useState<Workflow[]>(initialWorkflows);

  // TO-DO - placeholder content for a new workflow
  const addWorkflow = () =>
    setWorkflows((current) => [
      ...current,
      {
        id: Math.max(0, ...current.map((w) => w.id)) + 1,
        title: 'New workflow',
        description: 'Describe what this registration workflow is for',
      },
    ]);

  return (
    <section className="attendees section">
      <EventHeader />
      <h2>Event setup guide</h2>
      <p>
        See the available list of modules below. We suggest that you start with the attendee module.
      </p>
      <div className="Attendees-module">
        <div className="title">
          <img src={personPortal} alt="" />
          <h3>Attendee</h3>
        </div>
        <div className="steps">
          <div className="step">
            <p>
              <b>Step 1:</b> Base settings.
            </p>
            <StepCard>
              <StepCardBlock title="General" description="Define Attendee types & attributes" />
              <StepCardBlock title="Title" description={placeholderDescription} />
              <StepCardBlock title="Title" description={placeholderDescription} />
            </StepCard>
          </div>
          <div className="step">
            <p>
              <b>Step 2: </b>Build registration workflows.
            </p>
            <StepCardGrid>
              {workflows.map((workflow) => (
                <StepCard key={workflow.id}>
                  <StepCardBlock
                    title={workflow.title}
                    icon={logicArrow}
                    description={workflow.description}
                  />
                </StepCard>
              ))}
              <AddStepCard text="Add Registration Workflow" onClick={addWorkflow} />
            </StepCardGrid>
          </div>
          <div className="step">
            <p>
              <b>Step 3: </b>Design post-registration experiences.
            </p>
            <StepCardGrid>
              <StepCard>
                <StepCardBlock
                  title="Attendee Portal"
                  icon={computer}
                  description="Manage the portal that attendees will see after they've registered for your event."
                />
              </StepCard>
            </StepCardGrid>
          </div>
        </div>
      </div>
    </section>
  );
}
