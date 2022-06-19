export interface AccountDetails {
  accountOperationDTOS: AccountOperation[];
  balance:              number;
  accountId:            string;
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
}

export interface AccountOperation {
  id:            number;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   string;
}
