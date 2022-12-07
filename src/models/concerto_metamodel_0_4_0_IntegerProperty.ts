/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { concerto_metamodel_0_4_0_Decorator } from './concerto_metamodel_0_4_0_Decorator';
import type { concerto_metamodel_0_4_0_IntegerDomainValidator } from './concerto_metamodel_0_4_0_IntegerDomainValidator';
import type { concerto_metamodel_0_4_0_Range } from './concerto_metamodel_0_4_0_Range';

/**
 * An instance of concerto.metamodel@0.4.0.IntegerProperty
 */
export type concerto_metamodel_0_4_0_IntegerProperty = {
    /**
     * The class identifier for this type
     */
    $class: string;
    defaultValue?: number;
    validator?: concerto_metamodel_0_4_0_IntegerDomainValidator;
    name: string;
    isArray: boolean;
    isOptional: boolean;
    decorators?: Array<concerto_metamodel_0_4_0_Decorator>;
    location?: concerto_metamodel_0_4_0_Range;
};

