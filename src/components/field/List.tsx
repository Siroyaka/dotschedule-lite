import React from 'react';

import { MonthCalendar } from 'lib/DateFunctions';
import MonthSwitch from 'components/standalone/MonthSwitch';
import ListCalendar from 'components/template/ListCalendar';

interface OwnProps {
  year: number,
  month: number,
  monthCalendar: MonthCalendar,
  start: { year: number, month: number, day: number },
  end: { year: number, month: number, day: number },
  avaters: { [key: number]: string[] } | null,
}

type Props = OwnProps;

const ListField: React.FC<Props> = (props) => {
  return(
    <React.Fragment>
      <ListCalendar {...props} />
    </React.Fragment>
  )
}

export default ListField;