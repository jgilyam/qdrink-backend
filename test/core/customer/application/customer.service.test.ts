import {
  describe,
  expect,
  test,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import sinon from "sinon";

import {
  ICustomerMapper,
  ICustomerRepository,
} from "../../../../src/core/customer/domain";
import { CustomerService } from "../../../../src/core/customer/application/customer.service";
import { MongoCustomerRepository } from "../../../../src/core/customer/infrastructure/mongo/mongo.customer.repository";
import { CustomerMapper } from "../../../../src/core/customer/infrastructure/default.customer.mapper";
import { BalanceOperation } from "../../../../src/core/customer/domain/enums/operation.enum";
import { JsonWebTokenError } from "jsonwebtoken";

describe("CustomerService", () => {
  let service: CustomerService;

  const customerId = "23654";
  const customerMock = {
    id: customerId,
    phone: "123456",
    balance: 20,
  };

  const customerSavedMock = {
    id: customerId,
    phone: "123456",
    balance: 70,
  };
  let customerRepositoryMock: any;

  beforeEach(() => {
    customerRepositoryMock = {
        findById: jest.fn().mockReturnValue(Promise.resolve(customerMock)),
        save: jest.fn().mockReturnValueOnce(Promise.resolve({})),
      };

    service = new CustomerService(
      customerRepositoryMock as any,
      new CustomerMapper()
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
    jest.clearAllMocks();
    
  });

  test("Must be add 50", async () => {
    //

    //
    const customerEntity = await service.updateBalance(
      BalanceOperation.ADD,
      50,
      customerId
    );

    //

    expect(customerRepositoryMock.save).toHaveBeenCalledWith({
      id: customerId,
      phone: "123456",
      balance: 70,
    });
  });

  /*test("Must be substrac 5", async () => {
    //

    //
    const customerEntity = await service.updateBalance(
      BalanceOperation.SUBSTRACT,
      5,
      customerId
    );

    //

    expect(customerRepositoryMock.save).toHaveBeenLastCalledWith({
      id: customerId,
      phone: "123456",
      balance: 15,
    });
  });*/
});
