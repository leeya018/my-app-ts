export interface UseClockProps {
  timer: number;
  minutes: number;
  seconds: number;
}

export interface UseWorld extends UseClockProps {
  data: string;
}
