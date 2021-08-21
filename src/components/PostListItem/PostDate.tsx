import { formatDate } from '../../utils/formatDate';

export function PostDate({ date }: { date: string }) {
  return (
    <div>
      🗓️
      <span className="postsList__itemDate">{formatDate(date)}</span>
    </div>
  );
}
