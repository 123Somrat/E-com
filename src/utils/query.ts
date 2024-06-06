import generateQueryString from './queryStr';

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

type Tlinks = {
  self: string;
  next?: string;
  prev?: string;
};

const generateHateOsLinks = ({
  url = '/',
  path = '',
  query = {},
  hasNext = false,
  hasPrev = false,
  page = 1,
}) => {
  let next;
  let prev;
  const links: Tlinks = {
    self: url,
    next,
    prev,
  };

  if (hasNext) {
    const queryStr = generateQueryString({ ...query, page: page + 1 });
    links.next = `${path}?${queryStr}`;
  }
  if (hasPrev) {
    const queryStr = generateQueryString({ ...query, page: page - 1 });
    links.prev = `${path}?${queryStr}`;
  }

  return links;
};

export = { getPagination, generateHateOsLinks };
