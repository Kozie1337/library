import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface CustomLinkProps {
  href: string;
  activeClassName: string;
  inactiveClassName?: string;
  className?: string;
}

const Customlink: React.FC<CustomLinkProps> = ({
  href,
  activeClassName,
  inactiveClassName,
  className,
  children,
  ...rest
}) => {
  const router = useRouter();

  let currentClassName = className ? className : '';
  let isActive = router.pathname === href;
  if (isActive) {
    currentClassName += ` ${activeClassName}`;
  } else {
    currentClassName += ` ${inactiveClassName}`;
  }

  return (
    <NextLink href={href} {...rest}>
      <a className={currentClassName}>{children}</a>
    </NextLink>
  );
};

export default Customlink;