import Link from "next/link";
import Router from 'next/router';

const index = ( {navWithBackButton}) => {

  return (
    <header>
      <nav>
        <div>
          { navWithBackButton && <button type="button" onClick={ () => Router.back() }> Back  </button>}
        </div>
        <div>
          <Link href="/">
            <a> Home </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default index;
