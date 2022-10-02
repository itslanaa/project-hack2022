import React, { useMemo } from 'react';
import { Badge } from 'reactstrap';

const Img1 = `${process.env.PUBLIC_URL}/img/for_store/vase.png`;
const Img2 = `${process.env.PUBLIC_URL}/img/for_store/vase_2.png`;
const Img3 = `${process.env.PUBLIC_URL}/img/for_store/vase_3.png`;
const Img4 = `${process.env.PUBLIC_URL}/img/for_store/fur.png`;
const Img5 = `${process.env.PUBLIC_URL}/img/for_store/pillow.png`;
const Img6 = `${process.env.PUBLIC_URL}/img/for_store/pillow_2.png`;
const Img7 = `${process.env.PUBLIC_URL}/img/for_store/pillow_dog.png`;

const PhotoFormatter = value => (
  <div className="products-list__img-wrap">
    <img src={value} alt="" />
  </div>
);

const CreateDataProductListTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        width: 80,
      },
      {
        Header: 'Photo',
        accessor: 'photo',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Name',
        accessor: 'name',
        disableSortBy: true,
      },
      {
        Header: 'Category',
        accessor: 'category',
        disableSortBy: true,
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
        disableSortBy: true,
      },
      {
        Header: 'Article',
        accessor: 'article',
        disableSortBy: true,
      },
      {
        Header: 'Price, $',
        accessor: 'price',
      },
      {
        Header: 'Status',
        accessor: 'status',
        width: 110,
      },
    ], [],
  );

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        id: Math.min(99999, Math.round((Math.random() * 99999) + 1000)),
        photo: PhotoFormatter([Img1, Img2, Img3, Img4, Img5, Img6, Img7][Math.floor((Math.random() * 7))]),
        name: ['Glass Vase', 'Pillow'][Math.floor((Math.random() * 2))],
        category: 'Home accessories',
        quantity: Math.min(400, Math.round(Math.random() * 400)),
        article: `art${Math.min(99999, Math.round((Math.random() * 99999) + 1))}`,
        price: Math.min(1000, (Math.random() * 1000) + 20).toFixed(2),
        status: [
          (<Badge color="success">Enable</Badge>),
          (<Badge color="secondary">Disable</Badge>),
        ][Math.floor((Math.random() * 2))],
      });
    }
  };

  rows();
  const productListTableData = { tableHeaderData: columns, tableRowsData: data };
  return productListTableData;
};

export default CreateDataProductListTable;
