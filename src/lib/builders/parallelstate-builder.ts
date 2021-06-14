/*
 * Copyright 2021-Present The Serverless Workflow Specification Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * oUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { Builder, builder } from '../builder';
import { Specification } from '../definitions';
import { validate } from '../utils';

/**
 * The internal function used by the builder proxy to validate and return its underlying object
 * @param {Specification.Parallelstate} data The underlying object
 * @returns {Specification.Parallelstate} The validated underlying object
 */
function parallelstateBuildingFn(data: Specification.Parallelstate): () => Specification.Parallelstate {
  return () => {
    const result = {
      type: 'parallel',
    } as Specification.Parallelstate;

    if (!data.end && !data.transition) {
      result.end = true;
    }

    Object.assign(result, data);
    validate('Parallelstate', result);
    return result;
  };
}

/**
 * A factory to create a builder proxy for the type `Specification.Parallelstate`
 * @returns {Specification.Parallelstate} A builder for `Specification.Parallelstate`
 */
export function parallelstateBuilder(): Builder<Specification.Parallelstate> {
  return builder<Specification.Parallelstate>(parallelstateBuildingFn);
}
