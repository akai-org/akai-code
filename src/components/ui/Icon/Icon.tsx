type Props = {
  icon: string;
  className?: string;
};

export function Icon({ icon, className }: Props) {
  return (
    <svg viewBox="1 1 22 22" className={className}>
      <path d={icon} />
    </svg>
  );
}
