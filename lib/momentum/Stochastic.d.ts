import { IndicatorInput, Indicator } from '../indicator/indicator';
export declare class StochasticInput extends IndicatorInput {
    period: number;
    low: number[];
    high: number[];
    close: number[];
    signalPeriod: number;
}
export declare class StochasticOutput {
    k: number;
    d: number;
}
export declare class Stochastic extends Indicator {
    result: StochasticOutput[];
    generator: IterableIterator<StochasticOutput | undefined>;
    constructor(input: StochasticInput);
    static calculate(input: StochasticInput): StochasticOutput[];
    nextValue(input: StochasticInput): StochasticOutput;
}
