import { GenerateMongoURLProps } from 'src/types';

export function datesIsMoreThen24Hours(
  initialDate: Date | string,
  endDate: Date | string,
) {
  const initialFormatedDate = new Date(initialDate);
  const endFormatedDate = new Date(endDate);
  const differenceInSeconds = Math.abs(
    initialFormatedDate.getTime() - endFormatedDate.getTime(),
  );
  const differenceInHours = differenceInSeconds / (1000 * 60 * 60);

  return differenceInHours > 24;
}

export function generateMongoURL({
  port,
  domain,
  user,
  password,
}: GenerateMongoURLProps) {
  return `mongodb://${user}:${password}@${domain}:${port}/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2`;
}
