export interface ScheduleDay {
  day: string;
  date: string;
  times: string[];
}

export interface Venue {
  city: string;
  dateRange: string;
  venueName: string;
  address: string;
  image: string;
  formValue: string;
  schedule: ScheduleDay[];
}

export const venues: Venue[] = [
  {
    city: 'Augusta, GA',
    dateRange: 'May 19\u201321',
    venueName: 'Sheraton Augusta Hotel',
    address: '1069 Stevens Creek Rd, Augusta GA 30907',
    image: '/images/augusta.png',
    formValue: 'Sheraton Augusta, GA',
    schedule: [
      { day: 'Tuesday, May 19', date: '2026-05-19', times: ['10:30 AM', '1:00 PM', '3:30 PM', '6:00 PM'] },
      { day: 'Wednesday, May 20', date: '2026-05-20', times: ['10:30 AM', '1:00 PM', '3:30 PM', '6:00 PM'] },
      { day: 'Thursday, May 21', date: '2026-05-21', times: ['10:30 AM', '1:00 PM', '3:30 PM', '6:00 PM'] }
    ]
  },
  {
    city: 'Columbia, SC',
    dateRange: 'May 28\u201331',
    venueName: 'Fairfield Inn & Suites Columbia Harbison',
    address: '320 Columbiana Drive, Columbia SC 29212',
    image: '/images/columbia.png',
    formValue: 'Fairfield Inn Columbia, SC',
    schedule: [
      { day: 'Thursday, May 28', date: '2026-05-28', times: ['1:00 PM', '3:30 PM', '6:00 PM'] },
      { day: 'Friday, May 29', date: '2026-05-29', times: ['9:00 AM', '11:30 AM', '2:00 PM'] },
      { day: 'Saturday, May 30', date: '2026-05-30', times: ['9:00 AM', '11:30 AM', '2:00 PM'] },
      { day: 'Sunday, May 31', date: '2026-05-31', times: ['9:00 AM', '11:30 AM', '2:00 PM'] }
    ]
  }
];
