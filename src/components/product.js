import React from 'react';
import counter from '../hocs/counter';

function Product(props) {
  const { count, increment, decrement } = props;
  const btnCls =
    'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded';

  return (
    <dl>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm leading-5 font-medium text-gray-500">
          <h3>{props.product.name}</h3>
          <div className="flex flex-row align-center py-2">
            <button className={btnCls} onClick={decrement}>
              -
            </button>
            <h3 className="p-2 text-lg">{count}</h3>
            <button className={btnCls} onClick={increment}>
              +
            </button>
          </div>
        </dt>
        <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          {props.product.price}$
        </dd>
      </div>
    </dl>
  );
}

export default counter(Product);
