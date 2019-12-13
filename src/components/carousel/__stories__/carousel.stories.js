import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '../index';
import { items as testItems } from '../../gallery/items';
import classnames from 'classnames/bind';
import classes from './test-carousel.scss';

const cx = classnames.bind(classes);

storiesOf('Carousel', module)
  .add('Horizontal', () => (
    <div style={{ padding: 20 }}>
      <h2>Horizontal</h2>

      <h3>With controls; draggable; infinite; slide by 3; start from 4</h3>
      <Carousel
        targetIndex={3}
        items={testItems.map((item, index) => ({ ...item, index: index + 1 }))}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
            children={item.index}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>With controls; not draggable; infinite; slide by 1</h3>
      <Carousel
        step={1}
        draggable={false}
        items={testItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>Without controls; draggable; infinite</h3>
      <Carousel
        withControls={false}
        items={testItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>With controls; finite</h3>
      <Carousel
        infinite={false}
        items={testItems}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>Autoplay + infinite</h3>
      <Carousel
        draggable={false}
        autoplay
        autoplayTimeout={1000}
        items={testItems}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>Autoplay + infinite + draggable</h3>
      <Carousel
        draggable
        autoplay
        autoplayTimeout={1000}
        items={testItems}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />
      <h3>Autoplay + infinite + draggable + pause on hover</h3>
      <Carousel
        draggable
        autoplay
        autoplayTimeout={1000}
        autoplayHoverPause
        items={testItems}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />

      <h3>Autoplay + finite + draggable + pause on hover</h3>
      <Carousel
        draggable
        autoplay
        autoplayTimeout={1000}
        autoplayHoverPause
        infinite={false}
        items={[...testItems, ...testItems, ...testItems]}
        withControls={false}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: classes['test-carousel'],
        }}
      />
    </div>
  ))
  .add('Vertical', () => (
    <div style={{ padding: 20 }}>
      <h2>Vertical</h2>

      <h3>With controls; draggable; infinite; slide by 3</h3>
      <Carousel
        vertical
        items={testItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item', 'vertical')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: cx('test-carousel', 'vertical'),
        }}
      />

      <h3>With controls; not draggable; infinite; slide by 1</h3>
      <Carousel
        vertical
        step={1}
        draggable={false}
        items={testItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item', 'vertical')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: cx('test-carousel', 'vertical'),
        }}
      />

      <h3>Without controls; draggable; infinite; slide by 2</h3>
      <Carousel
        vertical
        step={2}
        withControls={false}
        items={testItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item', 'vertical')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: cx('test-carousel', 'vertical'),
        }}
      />

      <h3>With controls; finite</h3>
      <Carousel
        vertical
        step={2}
        infinite={false}
        items={testItems}
        renderItem={(item, index) => (
          <div
            key={index}
            className={cx('test-carousel-item', 'vertical')}
            style={{ backgroundImage: `url(${item.src})` }}
          />
        )}
        containerProps={{
          className: cx('test-carousel', 'vertical'),
        }}
      />
    </div>
  ));
