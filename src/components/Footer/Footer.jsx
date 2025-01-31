import React from 'react';
import HeadLine from '../Hero/components/HeadLine/HeadLine';
import Button from '../Hero/components/shared/Button/Button';

// import styles
import './footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <HeadLine />
        <div className="footer__cta">
          <Button btnContent="ثبت نام" />
        </div>
      </footer>
    </>
  );
}
