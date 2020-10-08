import React, { useState, useMemo, useCallback } from 'react';
import Product from './product';

export default function Menu(props) {
  const { menu } = props;
  const [isActive, setIsActive] = useState(false);
  const onToggle = useCallback(() => setIsActive((v) => !v), [setIsActive]);

  const content = useMemo(
    () => menu.map((product) => <Product key={product.id} product={product} />),
    [menu]
  );

  return (
    <div>
      <p>
        <b>
          {isActive ? '\u25B2' : '\u25BC'}{' '}
          <a href="#" onClick={onToggle}>
            Menu
          </a>
        </b>
      </p>

      {isActive ? content : null}
    </div>
  );
}
