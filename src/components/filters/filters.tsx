import Button from '@/components/ant/button/button';
import React from 'react';
import BackgroundImage from '@/assets/images/ornament.svg';
import styles from './filters.module.scss';

interface IFiltersProps {
  title: string;
  selectedFilters: string;
  filtersArray: string[];
  resetFilters: () => void;
  selectFilter: (name: string) => void;
}

const filters = ({
  title,
  selectedFilters,
  filtersArray,
  resetFilters,
  selectFilter,
}: IFiltersProps) => {
  return (
    <div className={styles.outer}>
      <img
        className={`basicBackgroundImage ${styles.backgroundImage}`}
        src={BackgroundImage.src}
        alt=""
        role="presentation"
      />
      <div className="container">
        <p className={styles.title}>{title}</p>
        <div className={styles.inner}>
          {filtersArray.map((filter) => {
            return (
              <Button
                variant={selectedFilters === filter ? 'gradient' : 'ghost'}
                onClick={() => selectFilter(filter)}
                key={filter}
              >
                {filter}
              </Button>
            );
          })}
          <Button
            variant={!selectedFilters ? 'gradient' : 'ghost'}
            onClick={() => resetFilters()}
          >
            Show All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default filters;
