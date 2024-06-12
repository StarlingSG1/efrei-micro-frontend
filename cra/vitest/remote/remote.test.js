import { describe, it, expect } from 'vitest';
import {capitalizeFirstLetter} from "../../remote/src/components/Title"

describe("Verify the title maj/min of the title", () => {
  it('the text should have first letter in caps and all other in min', () => {
    const EXPECTED_TITLE = capitalizeFirstLetter("VOICI LE TITRE")
    expect(EXPECTED_TITLE).toStrictEqual("Voici le titre")
  });

  it('should be empty because the title is a number ', () => {
    const EXPECTED_TITLE = capitalizeFirstLetter(0)
    expect(EXPECTED_TITLE).toStrictEqual("")
  });
})
