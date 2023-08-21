import PropTypes from 'prop-types';
import { H2 } from './section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <H2>{title}</H2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
