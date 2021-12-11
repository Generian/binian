import LinkIcon from '@mui/icons-material/Link';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import styles from './../styles/CopyButton.module.css'

interface CopyButtonProps {
  articleId: string
}

const CopyButton = ({ articleId }: CopyButtonProps) => {

  const onClick = () => {
    const url = `${window.location.origin}/${articleId}`
    navigator.clipboard.writeText(url);
  }

  return (
    <div className={styles.container}>
      <IconButton color="primary" aria-label="copy link" component="span" onClick={onClick}>
        <LinkIcon />
      </IconButton>
    </div>
  )
}

export default CopyButton