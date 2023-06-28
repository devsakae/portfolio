import React from 'react';

type Props = {}

export default function Calendar({}: Props) {
  return (
    <section>
      <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2VIYCe00JJkQt-aP-UszbeosnPpgH10vXU0d761Q2A9ioPttWYTFrohr73KugW4ctdUrrNepV1?gv=true" className='border-0' width="100%" height="600"></iframe>
    </section>
  )
}