const setUSDPrice = (price) => ({
  type: 'SET_USD_PRICE',
  payload: {
    usd: price
  }
})

const setUSDConversion = (price) => ({
  type: 'SET_USD_CONVERSION',
  payload: {
    usd: price
  }
})

const setUploaderFileList = (filelist) => ({
  type: 'SET_FILE_LIST',
  payload: {
    files: filelist
  }
})

const isUploading = () => ({
  type: 'IS_UPLOADING'
})

const isNotUploading = () => ({
  type: 'IS_NOT_UPLOADING'
})

const setArtworkPreview = (base64Img) => ({
  type: 'SET_ARTWORK_PREVIEW',
  payload: {
    artworkPreview: base64Img
  }
})

const resetArtworkPreview = () => ({
  type: 'RESET_ARTWORK_PREVIEW'
})

const setReleases = releases => ({
  type: 'SET_ALL_RELEASES',
  payload: {
    releases: releases
  }
})

const addRelease = release => ({
  type: 'ADD_RELEASE',
  payload: {
    release: release
  }
})

const showModal = id => ({
  type: 'SHOW_MODAL',
  payload: {
    modalVisibility: id
  }
})

const hideModal = () => ({
  type: 'HIDE_MODAL'
})

const addFetchRelease = func => ({
  type: 'ADD_FETCH_RELEASES_FUNCTION',
  payload: {
    fetchReleases: func
  }
})

// wonder if I'll ever need this
const setIPFS = (instance) => ({
  type: 'SET_IPFS',
  payload: {
    ipfs: instance
  }
})

export { setUSDPrice,
        setUploaderFileList,
        isUploading,
        isNotUploading,
        setArtworkPreview,
        resetArtworkPreview,
        setUSDConversion,
        setReleases,
        addRelease,
        showModal,
        hideModal,
        addFetchRelease,
        setIPFS }
