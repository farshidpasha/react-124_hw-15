import customer01 from '../../assets/logo/customer-01.png';
import customer02 from '../../assets/logo/customer-02.png';
import customer03 from '../../assets/logo/customer-03.png';
import customer04 from '../../assets/logo/customer-04.png';
import customer05 from '../../assets/logo/customer-05.png';
import './customers.css';

export default function Customers() {
  const db = [
    {
      id: 1,
      customerName: 'customer-01',
      logoSrc: customer01,
    },
    {
      id: 2,
      customerName: 'customer-02',
      logoSrc: customer02,
    },
    {
      id: 3,
      customerName: 'customer-03',
      logoSrc: customer03,
    },
    {
      id: 4,
      customerName: 'customer-04',
      logoSrc: customer04,
    },
    {
      id: 5,
      customerName: 'customer-05',
      logoSrc: customer05,
    },
    {
      id: 1,
      customerName: 'customer-01',
      logoSrc: customer01,
    },
    {
      id: 2,
      customerName: 'customer-02',
      logoSrc: customer02,
    },
    {
      id: 3,
      customerName: 'customer-03',
      logoSrc: customer03,
    },
    {
      id: 4,
      customerName: 'customer-04',
      logoSrc: customer04,
    },
    {
      id: 5,
      customerName: 'customer-05',
      logoSrc: customer05,
    },
  ];
  return (
    <div className="customers">
      {db.map((item) => (
        <div>
          <img src={item.logoSrc} alt={item.customerName} />
        </div>
      ))}
    </div>
  );
}
