export const PROPOSALS = '[PROPOSALS]'
export const CREATE_PROPOSAL = `${PROPOSALS} Create`

export const createProposal = (formData) => ({
    type: `${PROPOSALS} ${CREATE_PROPOSAL}`,
    payload: {
      formData: formData
    }
})
