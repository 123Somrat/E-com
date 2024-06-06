type Tpagination = {
  page: number;
  limit: number;
  totalItems: number;
  totalPage?: number;
  next?: number;
  prev?: number;
};

const getPagination = ({ page, limit, totalItems }: Tpagination) => {
  const totalPage = Math.ceil(totalItems / limit);

  let next;
  let prev;
  const pagination: Tpagination = {
    page,
    limit,
    totalItems,
    totalPage,
    next,
    prev,
  };

  if (page < totalPage) {
    pagination.next = page + 1;
  }

  if (page > 1) {
    pagination.prev = page - 1;
  }

  return pagination;
};

export = { getPagination };
