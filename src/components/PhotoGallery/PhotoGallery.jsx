import React, { useCallback, useEffect, useRef, useState } from 'react';
import { fetchPhotos } from '../../services/photoService.js';
import useInfiniteScroll from '../../hooks/useInfiniteScroll.js';
import PhotoCard from '../PhotoCard/PhotoCard.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import './PhotoGallery.css';

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(1);
  const inFlightRef = useRef(false);

  const loadNextPage = useCallback(async () => {
    if (inFlightRef.current || !hasMore) return;
    inFlightRef.current = true;
    setLoading(true);
    setError('');
    try {
      const nextPage = pageRef.current;
      const batch = await fetchPhotos(nextPage);
      if (batch.length === 0) {
        setHasMore(false);
        return;
      }
      setPhotos((current) => {
        const existingIds = new Set(current.map((photo) => photo.id));
        const uniqueBatch = batch.filter((photo) => !existingIds.has(photo.id));
        return uniqueBatch.length ? [...current, ...uniqueBatch] : current;
      });
      pageRef.current = nextPage + 1;
    } catch (requestError) {
      setError(requestError.message || 'Photos could not be loaded. Please try again.');
    } finally {
      inFlightRef.current = false;
      setLoading(false);
    }
  }, [hasMore]);

  const sentinelRef = useInfiniteScroll(loadNextPage, hasMore && !loading && !error);

  useEffect(() => { loadNextPage(); }, [loadNextPage]);

  return (
    <section className="gallery" aria-label="Photo gallery">
      <div className="photo-list">
        {photos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)}
      </div>
      {error && <ErrorMessage message={error} onRetry={loadNextPage} />}
      {loading && <Loader label={photos.length ? 'Finding more photos…' : 'Loading the gallery…'} />}
      {!loading && !error && photos.length === 0 && !hasMore && <p className="gallery-end">No photos are available right now.</p>}
      {!hasMore && photos.length > 0 && <p className="gallery-end">You’re all caught up.</p>}
      <div className="gallery-sentinel" ref={sentinelRef} aria-hidden="true" />
    </section>
  );
}
