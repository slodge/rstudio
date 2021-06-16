/*
 * program-status.test.ts
 *
 * Copyright (C) 2021 by RStudio, PBC
 *
 * Unless you have received this program directly from RStudio pursuant
 * to the terms of a commercial license agreement with RStudio, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

import { describe } from 'mocha';
import { assert } from 'chai';

import { exitFailure, exitSuccess, run } from '../../../src/main/program-status';

describe('ProgramStatus', () => {
  describe('Helper functions', () => {
    it('run will continue', () => {
      assert.isFalse(run().exit);
    });
    it('exitFailure will exit with non-zero', () => {
      const result = exitFailure();
      assert.isTrue(result.exit);
      assert.notEqual(result.exitCode, 0);
    });
    it('exitSuccess will exit with zero', () => {
      const result = exitSuccess();
      assert.isTrue(result.exit);
      assert.equal(result.exitCode, 0);
    });
  });
});
