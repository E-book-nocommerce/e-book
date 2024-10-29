import { useLocation, Link } from 'react-router-dom';

export interface BreadCrumbsProps {
  customLastUrl?: string;
}

const BreadCrumbs = ({ customLastUrl }: BreadCrumbsProps) => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="px-24 pt-6 pb-8 2xl:px-[250px]">
      <ol className="list-reset flex items-center">
        <li className={'px-1'}>
          <Link to={'/'} className="text-[#231F2D] opacity-50">
            Home
          </Link>
        </li>
        <li>
          <img src="/breadcrumbs.svg" alt="" className="" />
        </li>
        {paths.map((path, idx) => {
          const url = `/${paths.slice(0, idx + 1).join('/')}`; // Create URL for each segment
          return (
            <>
              {' '}
              {/* Use React.Fragment with a key */}
              {idx === paths.length - 1 ? (
                <li className="text-[#231F2D]">
                  {customLastUrl
                    ? customLastUrl
                    : path.charAt(0).toUpperCase() + path.slice(1)}
                </li>
              ) : (
                <>
                  <li>
                    <Link className="text-[#231F2D] opacity-50" to={url}>
                      {path.charAt(0).toUpperCase() + path.slice(1)}
                    </Link>
                  </li>
                  <li>
                    <img src="/breadcrumbs.svg" alt="" className="" />
                  </li>
                </>
              )}
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
