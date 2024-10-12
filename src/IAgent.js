type UUID = string;

interface IAgent {
    id: UUID;
    run(stateTransfer): boolean;
    getState(): IStateProof;
}
