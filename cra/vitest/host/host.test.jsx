import { describe, it, expect } from 'vitest';
import {formatTitle} from "../../host/src/component/Hero"

describe("Verify the title of the Hero", () => {
  it('should contain the title "Hero du Host"', () => {

    const EXPECTED_VALUE = formatTitle("Host")
    expect(EXPECTED_VALUE).toStrictEqual("Hero du Host");
  });

  it('should contain the title "Hero du Client"', () => {

    const EXPECTED_VALUE = formatTitle("Client")
    expect(EXPECTED_VALUE).toStrictEqual("Hero du Client");
  })
})
