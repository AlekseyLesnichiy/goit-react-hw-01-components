import PropTypes from 'prop-types';
import { Section } from './Statistics.styled';
import { SectionUL } from './Statistics.styled';
import { SectionLi } from './Statistics.styled';
import { SectionSpan } from './Statistics.styled';
import { H2 } from './Statistics.styled';
export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title ?? <H2>{title}</H2>}
      <SectionUL>
        {stats.map(stats => (
          <SectionLi key={stats.id}>
            <SectionSpan>{stats.label}</SectionSpan>
            <SectionSpan>{stats.percentage}</SectionSpan>
          </SectionLi>
        ))}
      </SectionUL>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
